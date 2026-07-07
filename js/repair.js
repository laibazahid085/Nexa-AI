function goToStep(step) {
    // Hide all contents
    document.getElementById('step-1-content').classList.add('hidden');
    document.getElementById('step-2-content').classList.add('hidden');
    document.getElementById('step-3-content').classList.add('hidden');

    // Show target content
    document.getElementById(`step-${step}-content`).classList.remove('hidden');

    // Update Stepper Visuals
    for (let i = 1; i <= 3; i++) {
        const numEl = document.getElementById(`step-num-${i}`);
        const labelEl = document.getElementById(`step-label-${i}`);

        if (!numEl || !labelEl) continue;

        if (i === step) {
            numEl.classList.remove('border-outline-variant', 'text-on-surface-variant');
            numEl.classList.add('border-primary', 'text-primary', 'bg-surface');

            labelEl.classList.remove('text-on-surface-variant');
            labelEl.classList.add('text-primary', 'font-bold');
        } else if (i < step) {
            numEl.classList.remove('border-outline-variant', 'text-on-surface-variant', 'bg-surface');
            numEl.classList.add('border-primary', 'text-on-primary', 'bg-primary');

            labelEl.classList.remove('text-primary', 'font-bold');
            labelEl.classList.add('text-on-surface-variant');
        } else {
            numEl.classList.remove('border-primary', 'text-primary', 'bg-primary', 'text-on-primary');
            numEl.classList.add('border-outline-variant', 'text-on-surface-variant', 'bg-surface');

            labelEl.classList.remove('text-primary', 'font-bold');
            labelEl.classList.add('text-on-surface-variant');
        }
    }
}

// Form Submit
const repairForm = document.getElementById('repairForm');

if (repairForm) {
    repairForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Request submitted successfully! Our technicians will contact you via WhatsApp shortly.');
    });
}