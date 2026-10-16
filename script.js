document.addEventListener("DOMContentLoaded", function() {
    // 1. CONFIGURAÇÃO DO WHATSAPP
    const phoneNumber = "5565999589043";
    const waMessage = "Olá Anthony! Vi seu portfólio na PereiraAnthony.co e gostaria de saber mais sobre os serviços de vocês.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waMessage)}`;

    const whatsappFloat = document.getElementById("whatsapp-float");
    const whatsappActions = document.querySelectorAll(".whatsapp-action");

    if (whatsappFloat) {
        whatsappFloat.setAttribute("href", whatsappUrl);
        whatsappFloat.setAttribute("target", "_blank");
    }

    whatsappActions.forEach(btn => {
        btn.setAttribute("href", whatsappUrl);
        btn.setAttribute("target", "_blank");
    });

    // 2. CONFIGURAÇÃO DO E-MAIL (GMAIL DIRECT WEB)
    const emailAddress = "contato.anthonypereira@gmail.com";
    const emailSubject = "Orçamento e Informações - PereiraAnthony.co";
    const emailBody = "Olá Anthony,\n\nGostaria de solicitar um orçamento/informações sobre os serviços da PereiraAnthony.co.";
    const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    const emailBtns = document.querySelectorAll(".email-action");
    emailBtns.forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            window.open(gmailWebUrl, "_blank");
        });
    });

    // 3. INTERATIVIDADE DO FAQ
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        item.addEventListener("click", () => {
            const isActive = item.classList.contains("active");
            faqItems.forEach(i => i.classList.remove("active"));
            if (!isActive) {
                item.classList.add("active");
            }
        });
    });

    // 4. MODAL LIGHTBOX PARA ABRIR A FOTO EM TELA CHEIA
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox-close");
    const expandableImages = document.querySelectorAll(".expandable-img");

    expandableImages.forEach(img => {
        img.addEventListener("click", function() {
            modal.classList.add("show");
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            document.body.style.overflow = "hidden"; // Desabilita o scroll da página enquanto aberto
        });
    });

    // Função para fechar a modal
    function closeModal() {
        modal.classList.remove("show");
        document.body.style.overflow = "auto"; // Reativa o scroll
    }

    // Fechar ao clicar no X
    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }

    // Fechar ao clicar fora da imagem (no fundo desfocado)
    if (modal) {
        modal.addEventListener("click", function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Fechar ao pressionar a tecla ESC do teclado
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && modal.classList.contains("show")) {
            closeModal();
        }
    });
});