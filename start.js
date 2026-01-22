<script>
    document.querySelector('form').onsubmit = function(e) {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('error-message');

        if (username === '' || password === '') {
            e.preventDefault(); // Prevent form submission
            errorMessage.textContent = 'Please fill in all fields.';
        }
    };
</script>
