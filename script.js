// // Lấy tất cả các phần tử .element
// const elements = document.querySelectorAll('.element');

// // Lặp qua mỗi phần tử và thêm sự kiện 'click'
// elements.forEach(element => {
//   element.addEventListener('click', () => {
//     // Xóa tất cả các button hiện có trong phần tử .element
//     element.querySelectorAll('button').forEach(button => {
//       button.remove();
//     });

//     // Tạo một button
//     const button = document.createElement('button');
//     button.textContent = 'Button'; // Thiết lập nội dung của button

//     // Thêm button vào phần tử .element
//     element.appendChild(button);

//     // Thêm sự kiện 'click' cho button
//     button.addEventListener('click', () => {
//       // Xử lý sự kiện khi button được click
//       console.log('Button clicked!');
//     });
//   });
// });
const buttons = document.querySelectorAll('.element-button');

// Thêm sự kiện 'click' vào từng button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Lấy giá trị của thuộc tính data-url của button được click
    const url = button.getAttribute('data-url');
    // Mở một trang web mới
    window.open(url, '_blank');
  });
});