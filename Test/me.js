const addButton = document.getElementById('addButton');
        const itemInput = document.getElementById('itemInput');
        const itemList = document.getElementById('itemList');
        const errorDiv = document.getElementById('error');

        addButton.addEventListener('click', function() {
            const inputValue = itemInput.value.trim(); 
            errorDiv.textContent = '';

            if (inputValue === '') {
                
                errorDiv.textContent = 'Please enter a value.';
            } else {
                
                const listItem = document.createElement('li');
                listItem.textContent = inputValue;
                itemList.appendChild(listItem);

                
                itemInput.value = '';
            }
        });
