# Menggunakan Node.js sebagai base image
FROM node:16

# Menentukan direktori kerja di dalam container
WORKDIR /app

# Menyalin file package.json dan package-lock.json ke container
COPY package*.json ./

# Menginstal dependencies
RUN npm install

# Menyalin seluruh kode aplikasi ke dalam container
COPY . .

# Mengekspos port yang digunakan aplikasi
EXPOSE 3000

# Menjalankan aplikasi
CMD ["npm", "start"]
