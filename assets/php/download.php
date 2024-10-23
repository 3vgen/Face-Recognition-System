<?php
// Имя файла для скачивания
$file = '../../file.txt';  // Укажите путь к файлу

// Проверяем, существует ли файл
if (!file_exists($file)) {
    die("Ошибка: файл не найден.");
}

// Получаем информацию о клиенте
$client_ip = $_SERVER['REMOTE_ADDR'];  // IP-адрес клиента
$current_time = date("Y-m-d H:i:s");   // Текущая дата и время
$file_name = basename($file);          // Имя файла без пути

// Файл для записи статистики
$log_file = '../../downloads_log.txt';  // Укажите файл для записи логов

// Записываем данные в файл (формат: имя_файла;дата/время;ip-адрес клиента)
$log_data = "$file_name;$current_time;$client_ip;\n";
file_put_contents($log_file, $log_data, FILE_APPEND | LOCK_EX);

// Выполняем редирект на файл для скачивания
header('Content-Description: File Transfer');
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename=' . basename($file));
header('Content-Transfer-Encoding: binary');
header('Expires: 0');
header('Cache-Control: must-revalidate');
header('Pragma: public');
header('Content-Length: ' . filesize($file));

// Чтение и передача файла
readfile($file);
exit;
?>
