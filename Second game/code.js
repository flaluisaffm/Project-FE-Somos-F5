// Game state
let board = Array(9).fill(null);
let currentPlayer = 'X';
let gameOver = false;

// Winning combinations
const WINNING_COMBINATIONS = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal top-left to bottom-right
    [2, 4, 6], // Diagonal top-right to bottom-left
];

// DOM elements
const gameBoard = document.getElementById('gameBoard');
const resetButton = document.getElementById('resetButton');
const statusContent = document.getElementById('statusContent');
const statusBackground = document.getElementById('statusBackground');
const currentPlayerDisplay = document.getElementById('currentPlayer');

// SVG templates for X and O
function createXSVG(isWinning) {
    return `
        <svg class="${isWinning ? 'winning' : ''}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M 20 18 Q 35 35, 50 52 T 82 85" stroke="#2563eb" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M 82 18 Q 65 35, 50 52 T 18 85" stroke="#2563eb" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;
}

function createOSVG(isWinning) {
    return `
        <svg class="${isWinning ? 'winning' : ''}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50 15 Q 70 15, 80 30 T 85 50 Q 85 70, 75 80 T 50 87 Q 30 87, 20 75 T 15 50 Q 15 30, 25 20 T 50 15" stroke="#dc2626" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;
}

// Calculate winner
function calculateWinner(board) {
    for (const [a, b, c] of WINNING_COMBINATIONS) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return { winner: board[a], winningLine: [a, b, c] };
        }
    }
    return { winner: null, winningLine: null };
}

// Check for draw
function isDraw(board) {
    return board.every(square => square !== null);
}

// Update status display
function updateStatus() {
    const { winner, winningLine } = calculateWinner(board);
    
    if (winner) {
        statusBackground.className = 'status-background winner';
        statusContent.innerHTML = `
            <div class="winner-text">🎉 Winner! 🎉</div>
            <div class="winner-player player-${winner.toLowerCase()}">Player ${winner} wins!</div>
        `;
    } else if (isDraw(board)) {
        statusBackground.className = 'status-background draw';
        statusContent.innerHTML = `
            <div class="draw-text">It's a Draw!</div>
            <div class="draw-subtext">Well played!</div>
        `;
    } else {
        statusBackground.className = 'status-background';
        statusContent.innerHTML = `
            <div class="status-label">Current Player</div>
            <div class="current-player player-${currentPlayer.toLowerCase()}">${currentPlayer}</div>
        `;
    }
}

// Create square element
function createSquare(index) {
    const square = document.createElement('button');
    square.className = 'square';
    square.dataset.index = index;
    
    // Add hover indicator for empty squares
    if (!board[index]) {
        square.innerHTML = `
            <div class="hover-indicator">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="30"/>
                </svg>
            </div>
        `;
    }
    
    square.addEventListener('click', () => handleSquareClick(index));
    
    return square;
}

// Handle square click
function handleSquareClick(index) {
    if (board[index] || gameOver) return;
    
    const { winner } = calculateWinner(board);
    if (winner) return;
    
    // Update board
    board[index] = currentPlayer;
    
    // Re-render the board
    renderBoard();
    
    // Check for winner or draw
    const { winner: newWinner } = calculateWinner(board);
    if (newWinner || isDraw(board)) {
        gameOver = true;
    } else {
        // Switch player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
    
    updateStatus();
}

// Render the board
function renderBoard() {
    gameBoard.innerHTML = '';
    const { winner, winningLine } = calculateWinner(board);
    
    board.forEach((value, index) => {
        const square = createSquare(index);
        
        if (value) {
            square.classList.add('disabled');
            const isWinning = winningLine && winningLine.includes(index);
            
            if (isWinning) {
                square.classList.add('winning');
            }
            
            if (value === 'X') {
                square.innerHTML = createXSVG(isWinning);
            } else {
                square.innerHTML = createOSVG(isWinning);
            }
        }
        
        gameBoard.appendChild(square);
    });
}

// Reset game
function resetGame() {
    board = Array(9).fill(null);
    currentPlayer = 'X';
    gameOver = false;
    renderBoard();
    updateStatus();
}

// Event listeners
resetButton.addEventListener('click', resetGame);

// Initialize game
renderBoard();
updateStatus();
