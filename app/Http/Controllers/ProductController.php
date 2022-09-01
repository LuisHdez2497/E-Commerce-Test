<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Illuminate\Support\Facades\Log;

class ProductController extends Controller
{
    public function get(){
        $data = Product::all();
        foreach ($data as $d){
            $d->getMedia();
        }
        return response()->json($data);
    }

    public function store(ProductRequest $request){
        $data = $request->all();

        if ($request->hasFile('image')){
            $file = $request->file('image');
            $extension = 'png';
            $name = strtolower($data['name']);
            $filename = str_replace(' ', '', $name).'.'.$extension;

            $file->move(storage_path('app\public\img'), $filename);
        }

        Product::create($data);
        return response()->json(['message' => 'Product is registered']);
    }

    public function show($id){
        $product = Product::findOrFail($id);
        $product->getMedia('images');
        return response()->json($product);
    }

    public function update(ProductRequest $request, $id){
        $product = Product::findOrFail($id);
        $data = $request->all();

        if ($request->hasFile('image')){
            $file = $request->file('image');
            $extension = 'png';
            $name = strtolower($data['name']);
            $filename = str_replace(' ', '', $name).'.'.$extension;

            $file->move(storage_path('app\public\img'), $filename);
        }

        $product->update($data);

        return response()->json(['message' => 'Product has been saved']);
    }

    public function delete($id){
        Product::findOrFail($id)->delete();
        return response()->json(['message' => 'Product has been removed']);
    }
}
