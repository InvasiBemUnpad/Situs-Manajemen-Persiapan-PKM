<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    {{-- <title>{{ config('app.name', 'Laravel') }}</title> --}}
    <title>Portal PKM Unpad</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <style>
        body {
            background-color: #E0E0E0 !important 
        }
    </style>
</head>
<body>
    <div id="app" style="min-height: 100vh">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
            <div class="container">
                @auth
                <a class="navbar-brand" href="{{ route('home') }}">
                    {{-- {{ config('app.name', 'Laravel') }} --}}
                    {{-- Portal PKM Unpad --}}
                    <img src="/logo.png" height="30"/>
                </a>
                @endauth

                @guest
                <a class="navbar-brand" href="{{ route('landing') }}">
                    {{-- {{ config('app.name', 'Laravel') }} --}}
                    Portal PKM Unpad
                </a>
                @endguest
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link @yield('caritim-nav')" href={{ route('bid') }}>Cari Tim</a>
                        </li>   
                        <li class="nav-item">
                            <a class="nav-link @yield('ligapkm-nav')" href={{ route('liga') }}>Liga PKM</a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link @yield('nonligapkm-nav')" href={{ route('nonliga') }}>Non Liga PKM</a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link @yield('coaching-nav')" href={{ route('coaching') }}>Coaching</a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link @yield('about-nav')" href={{ route('about') }}>Tentang</a>
                        </li> 
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        @if (isset($role) && $role == 1)
                            <li class="nav-item">
                                <a class="nav-link @yield('lecturer-nav')" href="{{ route('admin') }}">{{ __('auth.lecturer') }}</a>
                            </li>
                        @endif
                        @if (isset($role) && $role == 1)
                            <li class="nav-item">
                                <a class="nav-link @yield('admin-nav')" href="{{ route('admin') }}">{{ __('auth.admin') }}</a>
                            </li>
                        @endif
                        <!-- Authentication Links -->
                        @guest
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('login') }}">{{ __('auth.login') }}</a>
                            </li>
                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('auth.register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('auth.logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            @yield('content')
        </main>
    </div>
</body>
<footer style="min-width: 100vh; min-height: 90px; background-color: #212121; margin-top: 40px">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col pt-4">
                <small class="text-light">Copyright &copy; 2020 Fikri Rida Pebriansyah<br/>
                Departemen Akademik dan Inovasi</small>
            </div>
            <div class="col py-3 justify-content-end d-flex">
                <img src="/images/logo/unpad.png" height="60"/>
                <img src="/images/logo/bem.png" height="60"/>
                <img src="/images/logo/xman.png" height="60"/>
            </div>
        </div>
    </div>
</footer>
</html>
