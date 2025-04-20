# 🧩 Series Học Ant Design - Xây dựng UI chuẩn doanh nghiệp với React

- <b>Author: `@Vinhdev04`</b><br><br>
  ![Ant Design Banner](./Docs/Sources/Images/banner.png)

> 🌟 Bộ công cụ UI tuyệt đẹp, hiện đại, dễ tùy biến cho các ứng dụng React

---

## 📚 Giới thiệu

**Ant Design** là thư viện UI mạnh mẽ và phổ biến được phát triển bởi Alibaba, hỗ trợ bạn xây dựng nhanh các giao diện doanh nghiệp, dashboard, admin panel với hàng trăm component thiết kế sẵn.

Series này sẽ giúp bạn:

- Làm chủ Ant Design trong React
- Hiểu nguyên tắc design system
- Tuỳ chỉnh theme & component nâng cao
- Xây dựng dashboard hoặc CMS hoàn chỉnh

---

## 🧱 Nội dung Series

| STT | Chủ đề               | Nội dung                                          |
| --- | -------------------- | ------------------------------------------------- |
| 1️⃣  | Cài đặt AntD         | Cài với React, cấu hình theme                     |
| 2️⃣  | Components cơ bản    | Button, Layout, Menu, Icon, Grid                  |
| 3️⃣  | Form nâng cao        | Form validation, Form.List, Dynamic Field         |
| 4️⃣  | Table & Pagination   | Table API, Column sorting, filtering              |
| 5️⃣  | Modal, Drawer, Tabs  | Dialog nâng cao, UI có chiều sâu                  |
| 6️⃣  | Theme & Custom Style | Custom token, dark mode, sử dụng `ConfigProvider` |
| 7️⃣  | Project thực tế      | Quản lý người dùng (CRUD + UI chuẩn)              |
| 8️⃣  | Kết hợp Backend      | Gọi API bằng Axios / React Query                  |
| 9️⃣  | Triển khai           | Build + deploy React app lên hosting              |

---

## 🎯 Sau series bạn sẽ:

- ✅ Sử dụng thuần thục component Ant Design
- ✅ Biết cách viết form phức tạp và bảng dữ liệu động
- ✅ Biết custom giao diện theo thương hiệu
- ✅ Làm được admin dashboard chuyên nghiệp

---

## 📸 Hình ảnh minh họa

### Ant Design Table & Filter

![Ant Design Table & Filter](./Docs/Sources/Images/Ant-Design-Table-Filter-01.png)

### Form nâng cao

![Ant Design Table & Filter](./Docs/Sources/Images/Ant-Design-Table-Filter-02.png)

---

## ⚙️ Yêu cầu trước khi học

- Thành thạo **ReactJS cơ bản**
- Biết cách viết function component + hooks
- Có kiến thức HTML/CSS

---

## 💡 Tips học hiệu quả

- Đọc kỹ tài liệu chính thức: https://ant.design/components
- Xem kỹ API của mỗi component – hiểu `props` là chìa khóa
- Dùng plugin VSCode hỗ trợ JSX nhanh

---

---

## 🛠️ Dự án cuối khóa - Ant Design

---

### 📌 Tên dự án: `<!-- Elink Dashboard -->`

#### Dự an 01:

- <b>`Link demo:` </b> <a>https://enlink.themenate.net/dashboard/default</a>

---

### 🧱Template Designer

![Images 01](./Docs/Sources/Images/design-01.png)
![Images 02](./Docs/Sources/Images/design-02.png)
![Images 03](./Docs/Sources/Images/design-03.png)
![Images 04](./Docs/Sources/Images/design-04.png)
![Images 05](./Docs/Sources/Images/design-05.png)
![Images 06](./Docs/Sources/Images/design-06.png)

---

### ⚙️ Yêu cầu cơ bản

- ✅ Giao diện layout với `Layout`, `Menu`, `Sider`
- ✅ Form đăng ký/đăng nhập với Ant Design
- ✅ Bảng dữ liệu (`Table`) có phân trang, sort, filter
- ✅ Sử dụng `Modal`, `Tabs`, `Drawer`, `Notification`
- ✅ Gọi API bằng Axios / React Query

> 🔥 Bonus: Thêm dark mode hoặc custom theme

---

🚀 **Bắt đầu học ngay để làm chủ UI chuyên nghiệp với Ant Design nhé!**

> Nếu thấy hay, hãy ⭐ repo, chia sẻ hoặc góp ý để mình cải tiến series!

---

### Ant Design

# `Buổi 01:`

## **01: `Giới thiệu và cài đặt`**

### Giới thiệu:

- <i>Ant Design là một <b> `thư viện` </b> để xây dựng UI</i>
- <i>Ant Design cung cấp nhiều <b>`Components`</b> để xây dựng website chất lượng cao và dễ bảo trì </i>
- <i>Được phát triển bởi <b>`Alibaba`</b></i>
- <i></i>

### Cài đặt:

- <i>Link website: <a><b>`https://ant.design/`</b></a></i>
- <i>Link npm: <a><b>`https://www.npmjs.com/search?q=antd`</b></a></i>
- <i>Lệnh cài đặt: <b>`npm i antd`</b> </i>

## **02: Component: `Button`**

![Thuộc tính button](./Docs/Sources/Images/image-23.png)

## **03: Component: `Icon`**

![Thuộc tính Icon](./Docs/Sources/Images/image-23.png)

## **04: Component: `Typography`**

![Thuộc tính Typography](./Docs/Sources/Images/image-24.png)

## **05: Component: `Grid`**

![Thuộc tính Grid-Row](./Docs/Sources/Images/image-25.png)
![Thuộc tính Grid-Col](./Docs/Sources/Images/image-26.png)

## **06: Component: `Layout`**

- <i>Dùng để xử lý bố cục tổng thê của một trang web</i>
- <i>Các <b>`Component`</b> của Layout:</i>
- <b>`Layout:`</b>
- <i>Bao boc toàn bộ bố cục (tương tự thẻ `section` trong `HTML`) </i>
- <i>Bên trong có thể chứa các `component`: `Header, Sider, Content, Footer hoặc lồng một Layout khác`</i>
- <b>`Header:`</b>
- <i>Là header của trang (tương tự thẻ `header`)</i>
- <b>`Sider:`</b>
- ![Thuộc tính Sider](./Docs/Sources/Images/image-27.png)
- <i>Là menu bên trái của trang (tương tự thẻ `aside`)</i>
- <b>`Content:`</b>
- <i>Chứa toàn bộ nội dung của trang (tương tự thẻ `main`)</i>
- <b>`Footer:`</b>
- <i>Là chân trang (tương tư thẻ `footer`)</i>

## **07: Component: `Dropdown`**

- ![Thuộc tính Dropdown](./Docs/Sources/Images/image-28.png)
- <b>Sử dụng hàm `dropdownRender` đê custom `Dropdown`</b>

## **08: Component: `Menu`**

- ![Thuộc tính Menu](./Docs/Sources/Images/image-29.png)
- ![Thuộc tính Menu](./Docs/Sources/Images/image-30.png)
- ![Thuộc tính Menu](./Docs/Sources/Images/image-31.png)

## **Bài tập**

## <b>Link demo: <a>`https://enlink.themenate.net/dashboard/default`</a></b>

# `Buổi 02:`

## **09: Component: `Input`**

### Lý thuyết:

![ Component: `Input`](./Docs/Sources/Images/component-input-01.png)
![ Component: `Input`](./Docs/Sources/Images/component-input-02.png)
![ Component: `Input`](./Docs/Sources/Images/component-input-03.png)
![ Component: `Input`](./Docs/Sources/Images/component-input-04.png)

### Ví dụ:

![Ví dụ 01](./Docs/Sources/Images/vd-component-input-01.png)<br><br>
![Ví dụ 02](./Docs/Sources/Images/vd-component-input-02.png)<br><br>

---

## **10: Component: `Checkbox`**

### Lý thuyết:

![Component: `Checkbox`](./Docs/Sources/Images/component-checkbox-01.png)<br><br>
![Component: `Checkbox`](./Docs/Sources/Images/component-checkbox-02.png)<br><br>

### Ví dụ:

## ![Ví dụ 01](./Docs/Sources/Images/vd-component-checkbox.png)<br><br>

## **11: Component: `DataPicker`**

### Lý thuyết:

![Component: `DataPicker`](./Docs/Sources/Images/component-date.png)<br><br>

### Ví dụ:

## ![Ví dụ ](./Docs/Sources/Images/vd-component-date.png)<br><br>

---

## **12: Component: `Radio`**

### Lý thuyết:

![ Component: `Radio`](./Docs/Sources/Images/component-radio-01.png)<br><br>
![ Component: `Radio`](./Docs/Sources/Images/component-radio-02.png)<br><br>

### Ví dụ:

## ![Ví dụ ](./Docs/Sources/Images/vd-component-radio.png)<br><br>

--

## **13: Component: `Select`**

### Lý thuyết:

![ Component: `Radio`](./Docs/Sources/Images/component-select-01.png)<br><br>
![ Component: `Radio`](./Docs/Sources/Images/component-select-02.png)<br><br>
![ Component: `Radio`](./Docs/Sources/Images/component-select-03.png)<br><br>
![ Component: `Radio`](./Docs/Sources/Images/component-select-04.png)<br><br>

### Ví dụ:

## ![Ví dụ ](./Docs/Sources/Images/vd-component-select.png)<br><br>

--

## **14: Component: `Switch`**
