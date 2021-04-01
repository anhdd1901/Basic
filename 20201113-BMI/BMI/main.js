const ima = document.querySelector('.image-box')
const num = document.querySelectorAll('span')[0]
const title = document.querySelectorAll('span')[1]
const commend = document.querySelectorAll('span')[2]
const err1 = document.querySelectorAll('small')[0]
const err2 = document.querySelectorAll('small')[1]
const checkbutton = document.querySelector('button')
const input1 = document.querySelectorAll('input')[0]
const input2 = document.querySelectorAll('input')[1]
const data = [
    {
        check: false,
        title: "Chỉ số BMI dưới 18,5 là thiếu cân",
        content: "Bạn cần áp dụng chế độ ăn và thể thao để tăng cân.",
        image:
            "https://images.unsplash.com/photo-1541306912932-f6bed7f462eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    {
        check: false,
        title: "Chỉ số BMI từ 18,5 đến 24,9 là bình thường",
        content: "Bạn có một cơ thể tốt.",
        image:
            "https://images.unsplash.com/photo-1579047440583-43a690fe2243?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    {
        check: false,
        title: "Chỉ số BMI ở giữa 25,0 và 29,9 được coi là thừa cân",
        content:
            "Tuy nhiên, tình trạng chưa quá trầm trọng nên bạn có thể tìm ngay các phương pháp giảm cân hiệu quả tự nhiên và kết hợp luyện tập. Nếu áp dụng điều độ và kiên trì, chỉ cần tốn khoảng vài tháng là bạn có ngay vóc dáng rất ưng ý rồi đó.",
        image:
            "https://images.unsplash.com/photo-1573879541250-58ae8b322b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    {
        check: false,
        title: "Chỉ số BMI bằng hoặc trên 30 được xem là béo phì",
        content:
            "Với mức cân nặng này, cơ thể của bạn phải gặp rất nhiều áp lực hàng ngày, đặc biệt trọng lượng mỡ tạo áp lực lên cơ xương và các cơ quan làm ảnh hưởng đến sinh hoạt và sức khỏe của bạn.",
        image:
            "https://images.unsplash.com/photo-1573879026263-0ae3b9599d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=620&q=80",
    }
];

checkbutton.addEventListener('click', function () {
    input1.parentNode.classList.remove('error')
    input2.parentNode.classList.remove('error')
    input2.parentNode.classList.remove('success')
    input1.parentNode.classList.remove('success')
    err1.innerText = ''
    err2.innerText = ''
    num.parentNode.classList.add('hide')
    num.parentNode.previousSibling.previousSibling.classList.remove('hide')
    ima.style.backgroundImage = 'url(https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=562&q=80)'
    for (let i=0;i<data.length;i++) {
        data[i].check = false
    }
    let m = Number(input1.value)/100
    let kg = Number(input2.value)
    let bmi = 0
    // console.log(kg)
    // console.log(m)
    if (Number.isNaN(m)||m==0) {
        input1.parentNode.classList.add('error')
        err1.innerText = 'Try again!'
    }
    else if (!Number.isNaN(m)) {
        input1.parentNode.classList.add('success')
    }
    if (Number.isNaN(kg)||kg==0) {
        input2.parentNode.classList.add('error')
        err2.innerText = 'Try again!'
    }
    else if (!Number.isNaN(kg)) {
        input2.parentNode.classList.add('success')
    }
    if (!Number.isNaN(kg) && !Number.isNaN(m)) {
        bmi = kg / (m * m)
        console.log(bmi)
        if (bmi < 18.5) {
            data[0].check = true
        }
        else if (bmi >= 18.5 && bmi < 25) {
            data[1].check = true
        }
        else if (bmi >= 25 && bmi < 30) {
            data[2].check = true
        }
        else {
            data[3].check = true
        }
    }
    for (let i=0; i<data.length;i++) {
        if (data[i].check&&m!=0&&kg!=0) {
            num.parentNode.classList.remove('hide')
            num.parentNode.previousSibling.previousSibling.classList.add('hide')
            num.innerText = `Your BMI index is ${bmi.toFixed(1)}`
            title.innerText = data[i].title
            commend.innerText = data[i].content
            ima.style.backgroundImage = `url(${data[i].image})`
        }
    }
})