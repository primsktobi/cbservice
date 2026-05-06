document.getElementById('politiqueBtn').addEventListener('click', function() {
        this.classList.toggle('open');
        document.getElementById('politiqueContent').classList.toggle('open');
    });

    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 60);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade').forEach(el => observer.observe(el));