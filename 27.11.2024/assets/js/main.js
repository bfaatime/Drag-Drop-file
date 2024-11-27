const fileInput = document.getElementById('fileInput');
const removeAllBtn = document.getElementById('removeAllBtn');
const fileList = document.getElementById('fileList');

fileInput.addEventListener('change', function(event) {
    const files = event.target.files;
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        const fileReader = new FileReader();

        fileReader.onload = function(e) {
            const fileItem = document.createElement('div');
            fileItem.classList.add('fileItem');

            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = file.name;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.onclick = () => {
                fileItem.remove(); 
            };

            fileItem.appendChild(img);
            fileItem.appendChild(deleteBtn);

            fileList.appendChild(fileItem);
        };

        fileReader.readAsDataURL(file);
    }
});

removeAllBtn.addEventListener('click', function() {
    fileList.innerHTML = ''; 
});


