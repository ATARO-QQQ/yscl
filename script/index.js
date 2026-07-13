        lucide.createIcons();

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const menuIcon = document.getElementById('menu-icon');
            const closeIcon = document.getElementById('close-icon');
            
            menu.classList.toggle('hidden');
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        }

        function updateDateTime() {
            const now = new Date();
            const dateString = now.toLocaleString('ja-JP', {
                year: 'numeric', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit', second: '2-digit'
            });
            const displayElement = document.getElementById('datetime-display');
            if (displayElement) {
                displayElement.textContent = dateString;
            }
        }
        
        updateDateTime();
        setInterval(updateDateTime, 1000);
