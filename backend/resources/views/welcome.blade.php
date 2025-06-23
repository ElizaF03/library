<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <link href="{{ asset('frontend/css/main.css') }}" rel="stylesheet">
</head>
<body>
<div id="app"></div>
<script type="module" src="{{ asset('frontend/js/main.js') }}"></script>
</body>

</html>
