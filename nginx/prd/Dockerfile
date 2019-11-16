FROM nginx:alpine

# Copy config
COPY nginx/prd/nginx-default.conf /etc/nginx/conf.d/default.conf

# Copy Angular Application
RUN rm -rf /usr/share/nginx/html/*
COPY dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
