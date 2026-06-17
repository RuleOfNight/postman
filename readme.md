# BÁO CÁO KIỂM THỬ API - POKEAPI

**Người thực hiện:** Lê Xuân Khóa
**Ngày kiểm thử:** 17/06/2026  
**Công cụ sử dụng:** Postman  
**Workspace:** Khoa Le Xuan's Workspace  

---

## 1. Thông Tin API Được Kiểm Thử

| Thuộc tính       | Chi tiết                                  |
|------------------|-------------------------------------------|
| Tên request      | Get data                                  |
| Phương thức      | GET                                       |
| URL              | https://pokeapi.co/api/v2/pokemon/ditto   |
| Collection       | My Collection                             |
| Trạng thái HTTP  | 200 OK                                    |
| Mô tả            | Lấy thông tin chi tiết của Pokémon Ditto  |

---

## 2. Danh Sách Kịch Bản Kiểm Thử

| STT | Tên kịch bản | Mục tiêu | Kết quả mong đợi | Kết quả thực tế | Trạng thái |
|-----|-------------|----------|------------------|-----------------|------------|
| 1 | Status code là 200 | Kiểm tra API phản hồi thành công | Status 200 | Status 200 | ✅ PASSED |
| 2 | Thời gian phản hồi dưới 3000ms | Kiểm tra hiệu năng API | responseTime < 3000ms | Đạt yêu cầu | ✅ PASSED |
| 3 | Content-Type là application/json | Kiểm tra định dạng header | Header chứa `application/json` | Đúng định dạng | ✅ PASSED |
| 4 | Response body là JSON hợp lệ | Kiểm tra cấu trúc dữ liệu | Body parse được thành JSON | JSON hợp lệ | ✅ PASSED |
| 5 | Tên Pokémon là 'ditto' | Kiểm tra đúng dữ liệu trả về | `name == "ditto"` | `name = "ditto"` | ✅ PASSED |
| 6 | ID của Ditto là 132 | Kiểm tra ID chính xác | `id == 132` | `id = 132` | ✅ PASSED |
| 7 | Response chứa các trường bắt buộc | Kiểm tra tính đầy đủ của dữ liệu | Có `name`, `id`, `abilities`, `types`, `stats`, `base_experience` | Đầy đủ các trường | ✅ PASSED |
| 8 | Abilities là mảng không rỗng | Kiểm tra dữ liệu abilities hợp lệ | `abilities.length > 0` | 2 abilities | ✅ PASSED |
| 9 | Types là mảng không rỗng | Kiểm tra dữ liệu types hợp lệ | `types.length > 0` | 1 type | ✅ PASSED |
| 10 | Base experience là số dương | Kiểm tra giá trị hợp lệ | `base_experience > 0` | `base_experience = 101` | ✅ PASSED |

---

## 3. Kết Quả Tổng Hợp

| Chỉ số            | Giá trị |
|-------------------|---------|
| Tổng số test      | 10      |
| Số test PASSED    | 10      |
| Số test FAILED    | 0       |
| Tỷ lệ thành công  | 100%    |

---

## 4. Dữ Liệu Mẫu Từ Response

```json
{
  "id": 132,
  "name": "ditto",
  "base_experience": 101,
  "abilities": [
    { "ability": { "name": "limber" }, "is_hidden": false, "slot": 1 },
    { "ability": { "name": "imposter" }, "is_hidden": true, "slot": 3 }
  ],
  "types": [
    { "type": { "name": "normal" }, "slot": 1 }
  ],
  "forms": [
    { "name": "ditto" }
  ]
}
