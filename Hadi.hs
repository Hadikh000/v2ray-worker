{
  "inbounds": [{
    "port": 443,
    "protocol": "vmess",
    "settings": {
      "clients": [{
        "id": "your-uuid",
        "alterId": 64
      }]
    },
    "streamSettings": {
      "network": "tcp",
      "security": "tls",
      "tlsSettings": {
        "certificates": [{
          "certificateFile": "/etc/letsencrypt/live/yourdomain.com/fullchain.pem",
          "keyFile": "/etc/letsencrypt/live/yourdomain.com/privkey.pem"
        }]
      }
    }
  }],
  "outbounds": [{
    "protocol": "freedom",
    "settings": {}
  }]
}
{
  "inbounds": [
    {
      "port": 1080, // Local listening port
      "protocol": "socks", // Protocol
      "settings": {
        "auth": "noauth", // No authentication
        "udp": false, // Whether to support UDP
        "ip": "127.0.0.1" // Local IP
      }
    }
  ],
  "outbounds": [
    {
      "protocol": "vmess", // Protocol
      "settings": {
        "vnext": [
          {
            "address": "server_address", // Replace with the server IP/domain
            "port": 10086, // Server port
            "users": [
              {
                "id": "UUID", // Same UUID as server
                "alterId": 64 // Same alterId as server
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "tcp", // Same as server
        "security": "none" // Same as server
      }
    }
  ]
}
