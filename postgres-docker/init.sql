CREATE SEQUENCE IF NOT EXISTS id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

CREATE TABLE IF NOT EXISTS chats
(
    id integer NOT NULL DEFAULT nextval('id_seq'::regclass),
    users character varying(255)[] COLLATE pg_catalog."default",
    "createdAt" time with time zone NOT NULL,
    "updatedAt" time with time zone NOT NULL,
    CONSTRAINT chats_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS messages
(
    id integer NOT NULL DEFAULT nextval('id_seq'::regclass),
    text character varying(255) COLLATE pg_catalog."default",
    "chatId" character varying(255) COLLATE pg_catalog."default" NOT NULL,
    "senderId" character varying(255) COLLATE pg_catalog."default" NOT NULL,
    "createdAt" character varying(255) COLLATE pg_catalog."default",
    "updatedAt" character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT messages_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS people
(
    id integer NOT NULL DEFAULT nextval('id_seq'::regclass),
    nickname character varying(255) COLLATE pg_catalog."default",
    email character varying(255) COLLATE pg_catalog."default",
    password character varying(255) COLLATE pg_catalog."default",
    image character varying(255) COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT people_pkey PRIMARY KEY (id),
    CONSTRAINT email_unique UNIQUE (email),
    CONSTRAINT nickname_unique UNIQUE (nickname),
    CONSTRAINT email_ukey CHECK (true) NOT VALID
);