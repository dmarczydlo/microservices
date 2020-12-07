FROM node:12 AS builder

# Create app directory
WORKDIR /app

# Install app dependencies
RUN npm install

COPY . .

RUN npm run build

FROM node:12

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

EXPOSE 3001
CMD [ "npm", "run", "start:prod" ]