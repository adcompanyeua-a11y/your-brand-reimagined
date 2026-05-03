
-- Roles infrastructure
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

CREATE POLICY "Users can view their own roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all roles"
  ON public.user_roles FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Replace permissive SELECT policy on leads
DROP POLICY IF EXISTS "Authenticated users can view leads" ON public.leads;

CREATE POLICY "Only admins can view leads"
  ON public.leads FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Add validation constraints on leads
ALTER TABLE public.leads
  ADD CONSTRAINT leads_nome_len CHECK (char_length(nome) BETWEEN 1 AND 200),
  ADD CONSTRAINT leads_whatsapp_len CHECK (char_length(whatsapp) BETWEEN 1 AND 30),
  ADD CONSTRAINT leads_email_len CHECK (char_length(email) BETWEEN 3 AND 254),
  ADD CONSTRAINT leads_email_format CHECK (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  ADD CONSTRAINT leads_empresa_len CHECK (empresa IS NULL OR char_length(empresa) <= 200),
  ADD CONSTRAINT leads_interesse_len CHECK (interesse IS NULL OR char_length(interesse) <= 1000);
