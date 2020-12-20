@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Register') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">Nama</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="faculty" class="col-md-4 col-form-label text-md-right">Fakultas</label>

                            <div class="col-md-6">
                                <select id="faculty" class="form-control @error('faculty') is-invalid @enderror" name="faculty" value="{{ old('faculty') }}" required autofocus>
                                    <option>Fakultas Hukum</option>
                                    <option>Fakultas Ekonomi dan Bisnis</option>
                                    <option>Fakultas Kedokteran</option>
                                    <option>Fakultas Matematika dan IPA</option>
                                    <option>Fakultas Pertanian</option>
                                    <option>Fakultas Kedokteran Gigi</option>
                                    <option>Fakultas Ilmu Budaya</option>
                                    <option>Fakultas Ilmu Sosial dan Ilmu Politik</option>
                                    <option>Fakultas Psikologi</option>
                                    <option>Fakultas Peternakan</option>
                                    <option>Fakultas Ilmu Komunikasi</option>
                                    <option>Fakultas Keperawatan</option>
                                    <option>Fakultas Perikanan dan Ilmu Kelautan</option>
                                    <option>Fakultas Teknologi Industri Pertanian</option>
                                    <option>Fakultas Farmasi</option>
                                    <option>Fakultas Teknik Geologi</option>
                                  </select>

                                {{-- <input id="faculty" type="text" class="form-control @error('faculty') is-invalid @enderror" name="faculty" value="{{ old('faculty') }}" required autocomplete="faculty" autofocus> --}}

                                @error('faculty')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="npm" class="col-md-4 col-form-label text-md-right">NPM</label>

                            <div class="col-md-6">
                                <input id="npm" type="text" class="form-control @error('npm') is-invalid @enderror" name="npm" value="{{ old('npm') }}" required autocomplete="name" autofocus>

                                @error('npm')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Register') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
