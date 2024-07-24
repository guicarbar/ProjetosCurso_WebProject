function raimbow() {
    var faces = ['front1', 'back1', 'left1', 'right1', 'top1', 'bottom1'];
    faces.forEach(function(face) {
        document.getElementById(face).style.animation = 'colors 2s infinite alternate'
})};

function raimbowRemove() {
    var faces = ['front1', 'back1', 'left1', 'right1', 'top1', 'bottom1'];
    faces.forEach(function(face) {
        document.getElementById(face).style.animation = ''
})};
