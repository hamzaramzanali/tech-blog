const newFormHandler = async (event) => {
    event.preventdefault();

    const title = document.querySelector('.post-title').value.trim();
    const body = document.querySelector('.post-body').value.trim();

    if (title && body) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: { 'Content-Type': 'application/json' },
        });
    if (response.ok) {
        document.location.replace('/')
    } else {
        alert('Failed to post')
    }
    }
}