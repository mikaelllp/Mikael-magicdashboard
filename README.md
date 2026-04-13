# Project M4: Interaction Master ⚡
Tugas praktikum Minggu 4 - State & Events.

## 📸 Preview
![Preview](https://img.sanishtech.com/u/dda9bdf3ec718f1f5ae08662dbbd03b1.jpeg)

## 🛠️ Logic Implemented
- **useState Hook:** 
Mengelola state untuk :
  - `name` → input nama dari user  
  - `count` → nilai counter angka  

- **Event Handlers:** 
   1. onChangeText → untuk update nama secara real-time saat user ngetik.
   2. onPress → untuk tombol tambah (+) dan kurang (-) pada counter.

- **Conditional Rendering:** 
Menampilkan teks "Halo, ..." jika nama kosong, dan berubah sesuai input user.

- **useEffect Hook:**
Digunakan untuk menjalankan efek saat komponen pertama kali di-render (mounting), ditandai dengan log "App Mounted" di console.

**🎯 Features:** 
- Input nama interaktif
- Greeting dinamis
- Counter (+ / -)
- UI simple dark mode

**📁 Structure:** 
magicdashboard/
├── app/
├── components/
├── assets/
├── hooks/
├── package.json
└── README.md

## 🔗 Demo
[Demo App](https://snack.expo.dev/@mikaelll/mikael---magic-dashboard)