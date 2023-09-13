$(() => {
    // 文字色変更
    $('#change-color').on('click',() => {
        $('#target').css('color','blue');
    });

    // 文字列変更
    $('#change-text').on('click',() => {
        $('#target').text("Hello, I'm Rodriguez!");
    });

    // フェードアウト
    $('#fade-out').on('click',() => {
        $('#target').fadeOut();
    });

    // フェードイン
    $('#fade-in').on('click',() => {
        $('#target').fadeIn();
    });
});