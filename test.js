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



pm.test("Stats có đúng 6 chỉ số", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.stats).to.be.an("array").with.lengthOf(6);
});

pm.test("Mỗi stat có base_stat là số dương", function () {
    const jsonData = pm.response.json();
    jsonData.stats.forEach(function(stat) {
        pm.expect(stat.base_stat).to.be.a("number").and.to.be.above(0);
    });
});

pm.test("Weight là số dương", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.weight).to.be.a("number").and.to.be.above(0);
});

pm.test("Height là số dương", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.height).to.be.a("number").and.to.be.above(0);
});

pm.test("sprites.front_default là URL hợp lệ", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.sprites.front_default).to.be.a("string").and.to.include("http");
});


pm.test("id là kiểu number", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.id).to.be.a("number");
});

pm.test("name là kiểu string", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.name).to.be.a("string");
});

pm.test("is_hidden trong abilities là kiểu boolean", function () {
    const jsonData = pm.response.json();
    jsonData.abilities.forEach(function(a) {
        pm.expect(a.is_hidden).to.be.a("boolean");
    });
});



pm.test("base_experience nằm trong khoảng 1 đến 1000", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.base_experience).to.be.within(1, 1000);
});

pm.test("order là số nguyên dương", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData.order).to.be.a("number").and.to.be.above(0);
});

pm.test("Type của Ditto là 'normal'", function () {
    const jsonData = pm.response.json();
    const typeNames = jsonData.types.map(t => t.type.name);
    pm.expect(typeNames).to.include("normal");
});



pm.test("Header Cache-Control tồn tại", function () {
    pm.response.to.have.header("Cache-Control");
});

pm.test("Header Transfer-Encoding hoặc Content-Length tồn tại", function () {
    const hasTransfer = pm.response.headers.has("Transfer-Encoding");
    const hasContentLength = pm.response.headers.has("Content-Length");
    pm.expect(hasTransfer || hasContentLength).to.be.true;
});



pm.test("Lưu id vào collection variable", function () {
    const jsonData = pm.response.json();
    pm.collectionVariables.set("pokemon_id", jsonData.id);
    pm.expect(pm.collectionVariables.get("pokemon_id")).to.eql(jsonData.id);
});

pm.test("Lưu name vào collection variable", function () {
    const jsonData = pm.response.json();
    pm.collectionVariables.set("pokemon_name", jsonData.name);
    pm.expect(pm.collectionVariables.get("pokemon_name")).to.eql(jsonData.name);
});
