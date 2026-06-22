const response = await fetch('http://localhost:8000/api', {
    method: 'POST',
    body: JSON.stringify({ name: 'John Doe' }),
    headers: { 'Content-Type': 'application/json' }
})