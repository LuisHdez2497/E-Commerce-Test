<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Log;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        if ($this->method() == 'POST'){
            return [
                'name' => 'required|regex:/^[\pL\s\-]+$/u|max:90',
                'email' => 'required|email',
                'password' => 'required|string|max:12'
            ];
        }elseif ($this->method() == 'PUT'){
            return [
                'name' => 'required|regex:/^[\pL\s\-]+$/u|max:90',
                'email' => 'required|email',
            ];
        }
    }
}
