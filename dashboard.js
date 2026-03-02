// 1. Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 2. Define Medical Theme Colors
const devColors = {
  navy: '#00204a',
  emerald: '#2ecc71',
  blue: '#3498db',
  purple: '#9b59b6',
  gold: '#f1c40f',
  alert: '#e74c3c',
  grid: 'rgba(226, 232, 240, 0.5)'
};

// 3. Global Chart.js Defaults
Chart.defaults.responsive = true;
Chart.defaults.maintainAspectRatio = false;
Chart.defaults.color = '#64748b'; // var(--text-muted)
Chart.defaults.font.family = "'Inter', sans-serif";

const initMedicalDashboard = () => {
  
  // --- 1. Line: Production Volume (Units Manufactured) ---
  new Chart(document.getElementById('chart1'), {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Daily Units',
        data: [120, 190, 170, 210, 230, 150, 90],
        borderColor: devColors.blue,
        backgroundColor: 'rgba(52, 152, 219, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: devColors.blue
      }]
    }
  });

  // --- 2. Bar: Batch Yield Rate (%) ---
  new Chart(document.getElementById('chart2'), {
    type: 'bar',
    data: {
      labels: ['B-901', 'B-902', 'B-903', 'B-904', 'B-905'],
      datasets: [{
        label: 'Yield %',
        data: [99.2, 98.7, 99.9, 97.4, 99.1],
        backgroundColor: devColors.emerald,
        borderRadius: 6
      }]
    },
    options: {
      scales: { y: { min: 95, max: 100 } } // Focused view for quality
    }
  });

  // --- 3. Doughnut: MDR/FDA Compliance Readiness ---
  new Chart(document.getElementById('chart3'), {
    type: 'doughnut',
    data: {
      labels: ['Certified', 'Under Review', 'Pending'],
      datasets: [{
        data: [85, 10, 5],
        backgroundColor: [devColors.emerald, devColors.gold, '#e2e8f0'],
        borderWidth: 0,
        hoverOffset: 10
      }]
    },
    options: { cutout: '70%' }
  });

  // --- 4. Polar: Inventory Allocation ---
  new Chart(document.getElementById('chart4'), {
    type: 'polarArea',
    data: {
      labels: ['Raw', 'WIP', 'Sterile', 'Transit'],
      datasets: [{
        data: [25, 18, 35, 22],
        backgroundColor: [devColors.navy, devColors.blue, devColors.emerald, devColors.purple]
      }]
    }
  });

  // --- 5. Line: MTBF (Mean Time Between Failure) ---
  new Chart(document.getElementById('chart5'), {
    type: 'line',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [{
        label: 'Ops Hours',
        data: [4200, 4800, 5100, 5900],
        borderColor: devColors.alert,
        borderDash: [5, 5],
        tension: 0
      }]
    }
  });

  // --- 6. Bar: Global Shipments (Millions) ---
  new Chart(document.getElementById('chart6'), {
    type: 'bar',
    data: {
      labels: ['USA', 'EU', 'Asia', 'Other'],
      datasets: [{
        label: 'Market Value',
        data: [14.2, 11.5, 15.8, 4.2],
        backgroundColor: devColors.navy,
        borderRadius: 4
      }]
    }
  });

  // --- 7. Pie: Product Portfolio Mix ---
  new Chart(document.getElementById('chart7'), {
    type: 'pie',
    data: {
      labels: ['Cardio', 'Imaging', 'Surgical'],
      datasets: [{
        data: [45, 25, 30],
        backgroundColor: [devColors.navy, devColors.blue, devColors.emerald]
      }]
    }
  });

  // --- 8. Radar: Sterilization Validation ---
  new Chart(document.getElementById('chart8'), {
    type: 'radar',
    data: {
      labels: ['Heat', 'Chemical', 'Radiation', 'Pressure', 'Package'],
      datasets: [{
        label: 'Target',
        data: [100, 100, 100, 100, 100],
        borderColor: '#cbd5e1',
        fill: false
      }, {
        label: 'Actual',
        data: [98, 100, 95, 99, 100],
        borderColor: devColors.emerald,
        backgroundColor: 'rgba(46, 204, 113, 0.2)'
      }]
    }
  });
};

// 4. GSAP Staggered Entrance
const animateDashboard = () => {
  // Header Animation
  gsap.from(".header-box", {
    duration: 1,
    opacity: 0,
    ease: "back.out(1.7)"
  });

  // Cards staggered rise
  gsap.from(".chart-card", {
    duration: 0.8,
    opacity: 0,
    stagger: 0.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".medical-grid",
      start: "top 85%"
    }
  });
};

// 5. Initialize on Load
window.addEventListener('DOMContentLoaded', () => {
  initMedicalDashboard();
  animateDashboard();

  // "Live Data" Pulse Effect Simulation
  setInterval(() => {
    const highlight = document.querySelector('.highlight');
    gsap.to(highlight, { opacity: 0.6, duration: 0.5, yoyo: true, repeat: 1 });
  }, 3000);
});