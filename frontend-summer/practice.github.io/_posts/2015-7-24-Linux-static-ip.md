---
layout: post
title: 리눅스 고정 IP 세팅
---

검색하기 귀찮아서 기록

/ect/network/interfaces 파일 수정

```
iface eth0 inet static
address 172.16.114.133
netmask 255.255.255.0
gateway 172.16.114.1
network 172.16.114.0
broadcast 172.16.114.255
```

네트워킹 restart

```
$sudo /etc/init.d/networking restart
```
