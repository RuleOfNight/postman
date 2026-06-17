// 1. Kiểm tra status code
pm.test("Status code là 200", function () {
    pm.response.to.have.status(200);
});

// 2. Kiểm tra thời gian phản hồi
pm.test("Thời gian phản hồi dưới 3000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(3000);
});

// 3. Kiểm tra Content-Type là JSON
pm.test("Content-Type là application/json", function () {
    pm.response.to.have.header("Content-Type");
    pm.expect(pm.response.headers.get("Content-Type")).to.include("application/json");
});

// 4. Kiểm tra response body có dạng JSON hợp lệ
pm.test("Response body là JSON hợp lệ", function () {
    pm.response.to.be.json;
});

// 5. Kiểm tra tên Pokémon trả về đúng
pm.test("Tên Pokémon là 'ditto'", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("ditto");
});

// 6. Kiểm tra ID của Pokémon
pm.test("ID của Ditto là 132", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.id).to.eql(132);
});

// 7. Kiểm tra các trường bắt buộc tồn tại
pm.test("Response chứa các trường bắt buộc", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("name");
    pm.expect(jsonData).to.have.property("id");
    pm.expect(jsonData).to.have.property("abilities");
    pm.expect(jsonData).to.have.property("types");
    pm.expect(jsonData).to.have.property("stats");
    pm.expect(jsonData).to.have.property("base_experience");
});

// 8. Kiểm tra abilities là mảng không rỗng
pm.test("Abilities là mảng không rỗng", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.abilities).to.be.an("array").that.is.not.empty;
});

// 9. Kiểm tra types là mảng không rỗng
pm.test("Types là mảng không rỗng", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.types).to.be.an("array").that.is.not.empty;
});

// 10. Kiểm tra base_experience là số dương
pm.test("Base experience là số dương", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.base_experience).to.be.a("number").and.to.be.above(0);
});
