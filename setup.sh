#!/bin/bash
cd "$(dirname "$0")" || exit

echo -n "Enter your OpenAI Key (eg: sk...): "
read OPENAI_API_KEY

NEXTAUTH_SECRET=$(openssl rand -base64 32)

ENV="NODE_ENV=development\n\
NEXTAUTH_SECRET=$NEXTAUTH_SECRET\n\
NEXTAUTH_URL=http://localhost:3000\n\
OPENAI_API_KEY=$OPENAI_API_KEY\n\
DATABASE_URL=file:../db/db.sqlite\n"

printf $ENV > .env

if [ "$1" = "--docker" ]; then
  printf $ENV > .env.docker
  source .env.docker
  docker build --build-arg NODE_ENV=$NODE_ENV -t Auto-GPT .
  docker run -d --name Auto-GPT -p 3000:3000 -v $(pwd)/db:/app/db Auto-GPT
else
  printf $ENV > .env
  ./prisma/useSqlite.sh
  npm install
  npm run dev
fi