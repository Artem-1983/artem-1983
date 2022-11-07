document.addEventListener('DOMContentLoaded', function()
    {document.querySelectorAll('.work-section__button').forEach(function(tabsBtn) {
            tabsBtn.addEventListener('click', function(event) {
                const path = event.currentTarget.dataset.path

                document.querySelectorAll('.tab-content').forEach(function(tabContent) {
                    tabContent.classList.remove('tab-content-active');
                })

                document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');

                document.querySelectorAll('.work-section__button').forEach(function(tabButton) {
                    tabButton.classList.remove('work-section__button-active');
                })

                document.querySelector(`[data-path="${path}"]`).classList.add('work-section__button-active');
            })
        })
    })
