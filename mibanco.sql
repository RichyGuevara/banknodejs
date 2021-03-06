PGDMP     -                    y            mibanco    13.2    13.2     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    24576    mibanco    DATABASE     f   CREATE DATABASE mibanco WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE mibanco;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false            ?           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    3            ?            1259    32776    accounts    TABLE     ?   CREATE TABLE public.accounts (
    id character varying NOT NULL,
    amount double precision NOT NULL,
    customerid character varying,
    openedat date NOT NULL
);
    DROP TABLE public.accounts;
       public         heap    postgres    false    3            ?            1259    24577 	   customers    TABLE     ?   CREATE TABLE public.customers (
    id character varying NOT NULL,
    name character varying,
    lastname character varying,
    email character varying
);
    DROP TABLE public.customers;
       public         heap    postgres    false    3            ?            1259    32784    transactions    TABLE     ?   CREATE TABLE public.transactions (
    number numeric NOT NULL,
    accountid character varying NOT NULL,
    type character varying NOT NULL,
    amount double precision NOT NULL,
    date date NOT NULL
);
     DROP TABLE public.transactions;
       public         heap    postgres    false    3            ?          0    32776    accounts 
   TABLE DATA           D   COPY public.accounts (id, amount, customerid, openedat) FROM stdin;
    public          postgres    false    201            ?          0    24577 	   customers 
   TABLE DATA           >   COPY public.customers (id, name, lastname, email) FROM stdin;
    public          postgres    false    200            ?          0    32784    transactions 
   TABLE DATA           M   COPY public.transactions (number, accountid, type, amount, date) FROM stdin;
    public          postgres    false    202            .           2606    32783    accounts accounts_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.accounts DROP CONSTRAINT accounts_pkey;
       public            postgres    false    201            ,           2606    24584    customers customers_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.customers DROP CONSTRAINT customers_pkey;
       public            postgres    false    200            0           2606    40961    transactions transacciones_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transacciones_pkey PRIMARY KEY (number);
 I   ALTER TABLE ONLY public.transactions DROP CONSTRAINT transacciones_pkey;
       public            postgres    false    202            ?   O   x?u??? ?j{??9쒆???e??P?F
S&A?:?l<??7?xۏ??V??V?|??G?zC??e%??1??H??      ?   {   x?m???0E?ۏ!Ţ?M?
?3?i?%?>,-?_?Ic?t?sni??>Y?,?@?(r Nt{j???t2?G;Wm????Jѿ!?u??^X1S?W???????8?;E????? _J_c606s      ?      x?????? ? ?          ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    24576    mibanco    DATABASE     f   CREATE DATABASE mibanco WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE mibanco;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false            ?           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    3            ?            1259    32776    accounts    TABLE     ?   CREATE TABLE public.accounts (
    id character varying NOT NULL,
    amount double precision NOT NULL,
    customerid character varying,
    openedat date NOT NULL
);
    DROP TABLE public.accounts;
       public         heap    postgres    false    3            ?            1259    24577 	   customers    TABLE     ?   CREATE TABLE public.customers (
    id character varying NOT NULL,
    name character varying,
    lastname character varying,
    email character varying
);
    DROP TABLE public.customers;
       public         heap    postgres    false    3            ?            1259    32784    transactions    TABLE     ?   CREATE TABLE public.transactions (
    number numeric NOT NULL,
    accountid character varying NOT NULL,
    type character varying NOT NULL,
    amount double precision NOT NULL,
    date date NOT NULL
);
     DROP TABLE public.transactions;
       public         heap    postgres    false    3            ?          0    32776    accounts 
   TABLE DATA           D   COPY public.accounts (id, amount, customerid, openedat) FROM stdin;
    public          postgres    false    201   ?       ?          0    24577 	   customers 
   TABLE DATA           >   COPY public.customers (id, name, lastname, email) FROM stdin;
    public          postgres    false    200   Y        ?          0    32784    transactions 
   TABLE DATA           M   COPY public.transactions (number, accountid, type, amount, date) FROM stdin;
    public          postgres    false    202   ?        .           2606    32783    accounts accounts_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT accounts_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.accounts DROP CONSTRAINT accounts_pkey;
       public            postgres    false    201            ,           2606    24584    customers customers_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.customers DROP CONSTRAINT customers_pkey;
       public            postgres    false    200            0           2606    40961    transactions transacciones_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transacciones_pkey PRIMARY KEY (number);
 I   ALTER TABLE ONLY public.transactions DROP CONSTRAINT transacciones_pkey;
       public            postgres    false    202           