#!/bin/bash
mkdir certs
openssl genrsa -out pwa-key.pem 2048
openssl req -new -sha256 -key pwa-key.pem -out pwa-csr.pem
openssl x509 -req -in pwa-csr.pem -signkey pwa-key.pem -out pwa-cert.pem
mv pwa-key.pem pwa-cert.pem pwa-csr.pem certs/
