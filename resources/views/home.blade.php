<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="https://cdn.materialdesignicons.com/2.8.94/css/materialdesignicons.min.css" rel="stylesheet"/>
    <title>{{ ($title ? $title.' | ':'') }}E-Commerce Test</title>
    @vite('resources/css/app.css')
</head>
<body>
<div id="root"></div>
@vite('resources/js/app.js')
</body>
</html>
