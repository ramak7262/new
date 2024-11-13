function applyNow(service) {
    const modal = document.getElementById('applicationModal');
    const serviceSelect = document.getElementById('serviceType');
    modal.style.display = 'block';
    serviceSelect.value = service;
}

// Close modal
document.querySelector('.close').onclick = function() {
    document.getElementById('applicationModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('applicationModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    alert('Application submitted successfully! We will contact you soon.');
    document.getElementById('applicationModal').style.display = 'none';
    event.target.reset();
}