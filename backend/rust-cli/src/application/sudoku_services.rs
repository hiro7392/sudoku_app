fn get_initial_board_service() {
    let board = domain::board::Board::get_sample_data();
    println!("Initial Board");
    board.display();
}

fn update_board_service() {
    let board = domain::board::Board::get_sample_data();
    println!("Initial Board");
    board.display();
}
