const elBody = document.querySelector('body');
const elBox = document.createElement('div');
const elTop = document.createElement('div');
const elBottom = document.createElement('div');
const elTitle = document.createElement('h1');

elBody.append(elBox)
elBox.append(elTop)
elBox.append(elTitle)
elBox.append(elBottom)


elBody.style.height = '100vh';
elBody.style.display = 'flex';
elBody.style.alignItems = 'center';
elBody.style.justifyContent = 'center';

elBox.style.width = '263px';
elBox.style.height =  '370px';
elBox.style.padding = '40px';
elBox.style.boxSizing = 'border-box';
elBox.style.backgroundColor = '#6D75E7';
elBox.style.borderRadius = '30px';

elTop.style.width = '30px';
elTop.style.height = '30px';
elTop.style.margin = '0 auto';
elTop.style.marginBottom = '20px';
elTop.style.transform = 'rotate(45deg)';
elTop.style.backgroundColor = 'white';

elTitle.textContent = 'The world of technology thrives best when individuals are left alone to be different, creative, and disobedient.';
elTitle.style.width = '140px';
elTitle.style.margin = '0 auto';
elTitle.style.fontSize = '19px';
elTitle.style.textAlign = 'center';
elTitle.style.color = 'white';
elTitle.style.fontWeight = '400';
elTitle.style.lineHeight = '28px';

elBottom.style.width = '30px';
elBottom.style.height = '30px';
elBottom.style.margin = '0 auto';
elBottom.style.marginTop = '20px';
elBottom.style.transform = 'rotate(45deg)';
elBottom.style.backgroundColor = 'white';