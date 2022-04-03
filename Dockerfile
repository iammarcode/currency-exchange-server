FROM node:14-alpine

ENV NODE_PORT=3000
ENV NODE_ENV="development"
ENV API_KEY="5b7ff6a7-5aeb-4d77-975c-870f6afa8b92"

RUN mkdir -p /app/source
WORKDIR /app/source

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install
COPY ./src ./src
RUN npm run build

FROM node:14-alpine

ENV NODE_ENV="production"
ENV NODE_PORT=3000
ENV API_KEY="5b7ff6a7-5aeb-4d77-975c-870f6afa8b92"

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production
COPY --from=0 /app/source/dist ./dist

EXPOSE 3000
CMD npm start
