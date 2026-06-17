# Báo Cáo Kiểm Thử API - PokéAPI (Ditto)

## Thông Tin Chung

| Mục | Chi tiết |
|-----|----------|
| **API Endpoint** | `GET https://pokeapi.co/api/v2/pokemon/ditto` |
| **Phương thức** | GET |
| **Tên request** | Get data |
| **Collection** | My Collection |
| **Workspace** | Khoa Le Xuan's Workspace |
| **Ngày kiểm thử** | 17/06/2026 |
| **Tổng số test cases** | 25 |
| **Kết quả** | ✅ 25/25 PASSED |

---

## Mô Tả API

PokéAPI là một RESTful API công khai cung cấp dữ liệu về thế giới Pokémon.
Endpoint `GET /api/v2/pokemon/ditto` trả về toàn bộ thông tin về Pokémon Ditto
(ID: 132), bao gồm chỉ số, khả năng, loại, hình ảnh và nhiều thông tin khác.

---

## Kết Quả Kiểm Thử

### Nhóm 1 — Kiểm Tra Cơ Bản (5 test)

| # | Tên Test Case | Mô tả | Kết quả |
|---|---------------|-------|---------|
| 1 | Status code là 200 | HTTP status code trả về đúng 200 OK | ✅ PASSED |
| 2 | Thời gian phản hồi dưới 3000ms | Response time phải nhỏ hơn 3000ms | ✅ PASSED |
| 3 | Content-Type là application/json | Header Content-Type phải chứa `application/json` | ✅ PASSED |
| 4 | Response body là JSON hợp lệ | Body phải parse được thành JSON hợp lệ | ✅ PASSED |
| 5 | Tên Pokémon là 'ditto' | Trường `name` trong response phải bằng `"ditto"` | ✅ PASSED |

### Nhóm 2 — Kiểm Tra Dữ Liệu Định Danh (2 test)

| # | Tên Test Case | Mô tả | Kết quả |
|---|---------------|-------|---------|
| 6 | ID của Ditto là 132 | Trường `id` phải bằng `132` | ✅ PASSED |
| 7 | Response chứa các trường bắt buộc | Các trường `name`, `id`, `abilities`, `types`, `stats`, `base_experience` phải tồn tại | ✅ PASSED |

### Nhóm 3 — Kiểm Tra Mảng Dữ Liệu (2 test)

| # | Tên Test Case | Mô tả | Kết quả |
|---|---------------|-------|---------|
| 8 | Abilities là mảng không rỗng | Trường `abilities` phải là mảng và có ít nhất 1 phần tử | ✅ PASSED |
| 9 | Types là mảng không rỗng | Trường `types` phải là mảng và có ít nhất 1 phần tử | ✅ PASSED |

### Nhóm 4 — Kiểm Tra Giá Trị Số (1 test)

| # | Tên Test Case | Mô tả | Kết quả |
|---|---------------|-------|---------|
| 10 | Base experience là số dương | `base_experience` phải lớn hơn 0 | ✅ PASSED |

### Nhóm 5 — Cấu Trúc Dữ Liệu Chi Tiết (5 test)

| # | Tên Test Case | Mô tả | Kết quả |
|---|---------------|-------|---------|
| 11 | Stats có đúng 6 chỉ số | Mảng `stats` phải có đúng 6 phần tử (HP, Attack, Defense, Sp.Atk, Sp.Def, Speed) | ✅ PASSED |
| 12 | Mỗi stat có base_stat là số dương | Mỗi phần tử trong `stats` phải có `base_stat > 0` | ✅ PASSED |
| 13 | Weight là số dương | Trường `weight` phải lớn hơn 0 | ✅ PASSED |
| 14 | Height là số dương | Trường `height` phải lớn hơn 0 | ✅ PASSED |
| 15 | sprites.front_default là URL hợp lệ | `sprites.front_default` phải bắt đầu bằng `http` | ✅ PASSED |

### Nhóm 6 — Kiểm Tra Kiểu Dữ Liệu (3 test)

| # | Tên Test Case | Mô tả | Kết quả |
|---|---------------|-------|---------|
| 16 | id là kiểu number | Trường `id` phải có kiểu dữ liệu `number` | ✅ PASSED |
| 17 | name là kiểu string | Trường `name` phải có kiểu dữ liệu `string` | ✅ PASSED |
| 18 | is_hidden trong abilities là kiểu boolean | Trường `is_hidden` trong mỗi ability phải là `boolean` | ✅ PASSED |

### Nhóm 7 — Kiểm Tra Giá Trị Hợp Lệ (3 test)

| # | Tên Test Case | Mô tả | Kết quả |
|---|---------------|-------|---------|
| 19 | base_experience nằm trong khoảng 1 đến 1000 | `base_experience` phải trong khoảng [1, 1000] | ✅ PASSED |
| 20 | order là số nguyên dương | Trường `order` phải là số nguyên dương | ✅ PASSED |
| 21 | Type của Ditto là 'normal' | Pokémon type đầu tiên phải là `"normal"` | ✅ PASSED |

### Nhóm 8 — Kiểm Tra Response Header (2 test)

| # | Tên Test Case | Mô tả | Kết quả |
|---|---------------|-------|---------|
| 22 | Header Cache-Control tồn tại | Response header phải có `Cache-Control` | ✅ PASSED |
| 23 | Header Transfer-Encoding hoặc Content-Length tồn tại | Phải có ít nhất một trong hai header | ✅ PASSED |

### Nhóm 9 — Lưu Biến (2 test)

| # | Tên Test Case | Mô tả | Kết quả |
|---|---------------|-------|---------|
| 24 | Lưu id vào collection variable | Lưu `pokemon_id = 132` vào collection variable | ✅ PASSED |
| 25 | Lưu name vào collection variable | Lưu `pokemon_name = "ditto"` vào collection variable | ✅ PASSED |

---

## Tổng Kết
Tổng số test case passed: 25/25

### Nhận Xét

- API hoạt động ổn định, trả về đúng dữ liệu cho Pokémon Ditto.
- Tất cả 25 test cases đều **PASSED**, không có lỗi nào phát sinh.
- Response time nằm trong ngưỡng cho phép (< 3000ms).
- Cấu trúc dữ liệu JSON đầy đủ và đúng định dạng.
- Các kiểu dữ liệu (`number`, `string`, `boolean`) đều chính xác.
- Giá trị các trường quan trọng (`id`, `name`, `type`) khớp với dữ liệu thực tế.

---
