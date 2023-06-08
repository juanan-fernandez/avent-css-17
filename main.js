const menuList = document.getElementById('menu-list');
const menuListItems = menuList.querySelectorAll('li');

const handleLiClick = liItem => {
	menuListItems.forEach(item => item.classList.remove('selected'));
	liItem.classList.add('selected');
};
menuListItems.forEach(li => {
	li.addEventListener('click', () => {
		handleLiClick(li);
	});
});
