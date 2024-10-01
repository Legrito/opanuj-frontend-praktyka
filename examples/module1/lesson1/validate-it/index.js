function validator() {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');

  const setMessage = (text) => result.innerHTML = text;

  button?.addEventListener('click', () => {
    const value = Number(input?.value);
    const isValid = value && Number.isInteger(value) && value > 0 && value < 100 && value % 2 === 0;

    if(isValid) {
      setMessage('Valid!');
    } else {
      setMessage('Invalid!')
    }
    
  });

  button2?.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();
