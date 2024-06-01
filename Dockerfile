FROM node:20-alpine
WORKDIR /index
COPY . . 
RUN npm install
EXPOSE 4000
CMD [“npm”, “run”, “start”]