
var modal = (function(){
    function init(){
        var btn = document.querySelectorAll('.modal-open');
        btn.forEach(function(elem, index){
            elem.addEventListener('click', function(event){
                openModal(this);
            });
        });

        var close = document.querySelectorAll('.modal-box-close');
        close.forEach(function(elem, index){
            elem.addEventListener('click', function(event){
                closeModal(this);
            });
        });
    }

    function openModal(target){
        console.log('open');
        var target = element.getAttribute('data-target'),
            modal = document.getElementById(target);
        modal.style.display = 'block';
        modal.classList.add('active');
    }

    function closeModal(target){
        console.log('close');
        var parentModal = getClosest(target, '.modal-container');
        parentModal.classList.remove('active');
        parentModal.style.display = 'none';
    }

    var getClosest = function(elem, selector) {
        for ( ; elem && elem !== document; elem = elem.parentNode ) {
            if ( elem.matches( selector ) ) return elem;
        }
        return null;
    }

    return {
        init: init,
        openModal: openModal,
        closeModal: closeModal
    }
})();
