document.addEventListener('DOMContentLoaded', function() {

    const initialData = []; 
    let gradesData = []; 

    const submitBtn = document.getElementById('submitBtn');
    const mathInput = document.getElementById('mathGrade');
    const englishInput = document.getElementById('englishGrade');
    const gradesBody = document.getElementById('gradesBody'); 
    const avgMathDisplay = document.getElementById('avgMath'); 
    const avgEnglishDisplay = document.getElementById('avgEnglish'); 
    const avgOverallDisplay = document.getElementById('avgOverall');

    if (!submitBtn) {
        console.error("致命錯誤：無法找到提交按鈕 (ID: submitBtn)。");
        return;
    }


    function renderTable() {
        gradesBody.innerHTML = ''; 

        gradesData.forEach((data, index) => {
            const rowAverage = (data.math + data.english) / 2;
            const newRow = gradesBody.insertRow();
            
            newRow.insertCell().textContent = index + 1;
            newRow.insertCell().textContent = data.math;
            newRow.insertCell().textContent = data.english;
            newRow.insertCell().textContent = rowAverage.toFixed(2);
        });
        
        updateColumnAverages();
    }

    function updateColumnAverages() { 
        if (gradesData.length === 0) {
            avgMathDisplay.textContent = '0.00';
            avgEnglishDisplay.textContent = '0.00';
            avgOverallDisplay.textContent = '0.00';
            return;
        }

        const totalRows = gradesData.length;
        const sumMath = gradesData.reduce((sum, data) => sum + data.math, 0);
        const sumEnglish = gradesData.reduce((sum, data) => sum + data.english, 0);

        const avgMath = sumMath / totalRows;
        const avgEnglish = sumEnglish / totalRows;
        const avgOverall = (sumMath + sumEnglish) / (totalRows * 2);

        avgMathDisplay.textContent = avgMath.toFixed(2);
        avgEnglishDisplay.textContent = avgEnglish.toFixed(2);
        avgOverallDisplay.textContent = avgOverall.toFixed(2);
    }

    function handleSubmit() {
        const mathValue = mathInput.value.trim(); 
        const englishValue = englishInput.value.trim();

        const math = parseInt(mathValue);
        const english = parseInt(englishValue);

        if (mathValue === '' || englishValue === '' || 
            isNaN(math) || isNaN(english) || 
            math < 0 || english < 0 || math > 100 || english > 100) {
            alert('請輸入有效的數字成績 (0-100)。');
            return;
        }

        const newGrade = { math: math, english: english };
        gradesData.push(newGrade);

        mathInput.value = '';
        englishInput.value = '';

        renderTable();
    }

    submitBtn.addEventListener('click', handleSubmit);

    gradesData = [...initialData];
    renderTable();
});