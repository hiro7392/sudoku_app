pub struct Board {
    board: [Option<u8>; 9 * 9],
}

impl Board {
    fn new(board: [Option<u8>; 9 * 9]) -> Self {
        Board { board }
    }
    pub fn get_sample_data() -> Board {
        let board = [
            Some(5),
            Some(3),
            None,
            None,
            Some(7),
            None,
            None,
            None,
            None,
            Some(6),
            None,
            None,
            Some(1),
            Some(9),
            Some(5),
            None,
            None,
            None,
            None,
            Some(9),
            Some(8),
            None,
            None,
            None,
            None,
            Some(6),
            None,
            Some(8),
            None,
            None,
            None,
            Some(6),
            None,
            None,
            None,
            Some(3),
            Some(4),
            None,
            None,
            Some(8),
            None,
            Some(3),
            None,
            None,
            Some(1),
            Some(7),
            None,
            None,
            None,
            Some(2),
            None,
            None,
            None,
            Some(6),
            None,
            Some(6),
            None,
            None,
            None,
            None,
            Some(2),
            Some(8),
            None,
            None,
            None,
            None,
            Some(4),
            Some(1),
            Some(9),
            None,
            None,
            Some(5),
            None,
            None,
            None,
            None,
            Some(8),
            None,
            None,
            Some(7),
            Some(9),
        ];
        Board::new(board)
    }

    pub fn display(&self) {
        for (i, cell) in self.board.iter().enumerate() {
            // show if iter is divisible by 9 return

            // if end of line print new line
            if i % 9 == 0 {
                println!();
            }
            // if end of 3x3 block print new line
            if i % 3 == 0 && i % 9 != 0 {
                print!("| ");
            }
            if i % 27 == 0 && i > 0 {
                println!("------+-------+------");
            }
            match cell {
                Some(x) => print!("{} ", x),
                None => print!("・"),
            }
            // if end of 3x3 block print new line
        }
    }
}
