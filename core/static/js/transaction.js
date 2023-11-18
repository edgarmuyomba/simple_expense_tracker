var icon_map = {
    "Food": `<svg style="width: 20px; height: auto;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>food-outline</title>
                    <path d="M1 22C1 22.54 1.45 23 2 23H15C15.56 23 16 22.54 16 22V21H1V22M8.5 9C4.75 9 1 11 1 15H16C16 11 12.25 9 8.5 9M3.62 13C4.73 11.45 7.09 11 8.5 11S12.27 11.45 13.38 13H3.62M1 17H16V19H1V17M18 5V1H16V5H11L11.23 7H20.79L19.39 21H18V23H19.72C20.56 23 21.25 22.35 21.35 21.53L23 5H18Z" /></svg>`,
    "Transportation": `<svg style="width: 20px; height: auto;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>train-car</title>
                    <path d="M12,4H5A3,3 0 0,0 2,7V15A3,3 0 0,0 5,18L4,19V20H5L7,17.97L9,18V13H4V6H13V8H15V7A3,3 0 0,0 12,4M5,14A1,1 0 0,1 6,15A1,1 0 0,1 5,16A1,1 0 0,1 4,15A1,1 0 0,1 5,14M20.57,9.66C20.43,9.26 20.05,9 19.6,9H12.41C11.95,9 11.58,9.26 11.43,9.66L10,13.77V19.28C10,19.66 10.32,20 10.7,20H11.32C11.7,20 12,19.62 12,19.24V18H20V19.24C20,19.62 20.31,20 20.69,20H21.3C21.68,20 22,19.66 22,19.28V17.91L22,13.77L20.57,9.66M12.41,10H19.6L20.63,13H11.38L12.41,10M12,16A1,1 0 0,1 11,15A1,1 0 0,1 12,14A1,1 0 0,1 13,15A1,1 0 0,1 12,16M20,16A1,1 0 0,1 19,15A1,1 0 0,1 20,14A1,1 0 0,1 21,15A1,1 0 0,1 20,16Z" /></svg>`,
    "Outing": `<svg style="width: 20px; height: auto;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>silverware-fork-knife</title>
                <path d="M11,9H9V2H7V9H5V2H3V9C3,11.12 4.66,12.84 6.75,12.97V22H9.25V12.97C11.34,12.84 13,11.12 13,9V2H11V9M16,6V14H18.5V22H21V2C18.24,2 16,4.24 16,6Z" /></svg>`,
    "Utilities": `<svg style="width: 20px; height: auto;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>power-plug-battery-outline</title>
                    <path d="M11 8.32C11.57 8.7 12 9.35 12 10V15.5L8.5 19V22H3.5V19L0 15.5V10C0 9 1 8 2 8V4H4V8H8V4H10V8C10.35 8 10.7 8.12 11 8.32M7.09 17.59L10 14.67V10.09C10 10.06 9.95 10 9.92 10H2.09C2.06 10 2 10.06 2 10.09V14.67L5.33 18H6.67L7.09 17.59M12 4.04C12.11 4 12.22 4 12.33 4H14V2H20V4H21.67C22.4 4 23 4.6 23 5.33V20.67C23 21 22.86 21.36 22.61 21.61C22.36 21.86 22 22 21.67 22H12.33C11.6 22 11 21.4 11 20.67V19.33L13 17.33V20H21V6H12V4.04Z" /></svg>`,
    "Groceries": `<svg style="width: 20px; height: auto;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>cart</title>
                    <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" /></svg>`,
    "Entertainment": `<svg style="width: 20px; height: auto;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <title>dance-ballroom</title>
                        <path d="M14 3.5C14 4.33 13.33 5 12.5 5S11 4.33 11 3.5 11.67 2 12.5 2 14 2.67 14 3.5M8.5 5C7.67 5 7 5.67 7 6.5S7.67 8 8.5 8 10 7.33 10 6.5 9.33 5 8.5 5M14 12L13.22 9.75H16.18L18.34 8.67C18.71 8.5 18.86 8.04 18.67 7.67C18.5 7.3 18.04 7.14 17.67 7.33L16.85 7.74L16.36 6.9C16.07 6.25 15.36 5.88 14.66 6.04L12.19 6.57C11.5 6.72 11 7.35 11 8.07V8.77L8.57 10.39H8.58C8.5 10.46 8.39 10.55 8.33 10.67L7.44 12.44L5.66 13.33C5.29 13.5 5.14 13.97 5.33 14.34C5.46 14.6 5.73 14.75 6 14.75C6.11 14.75 6.23 14.73 6.34 14.67L8.56 13.56L9.6 11.5L11 13C10 16 3 20 3 20S7 22 12 22 21 20 21 20 16 16 14 12M16.85 11.09L16.53 11.25H15.33L15.39 11.41C15.91 12.44 16.67 13.5 17.5 14.44L16.97 11.03L16.85 11.09Z" /></svg>`
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.aside div.transaction').forEach((transaction) => {
        const category = transaction.querySelector('p.category').textContent;
        console.log(category);
        transaction.querySelector('div.icon').innerHTML = icon_map[category];
    });
});