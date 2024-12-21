mod domain;
mod http_server;

fn main() {
    http_server::listen();

    // io::stdin().read_line(&mut guess)
    //     .expect("Failed to read line");
}
