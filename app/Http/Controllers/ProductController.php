<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;

class ProductController extends Controller
{
    public function get(){
        $data = Product::all();
        return response()->json($data);
    }

    public function store(ProductRequest $request){
        $data = $request->all();
        Product::create($data);
        return response()->json(['message' => 'Product is registered']);
    }

    public function show($id){
        $product = Product::findOrFail($id);
        return response()->json($product);
    }

    public function update(ProductRequest $request, $id){
        $product = Product::findOrFail($id);
        $data = $request->all();
        $product->update($data);

        return response()->json(['message' => 'Product has been saved']);
    }

    public function delete($id){
        Product::findOrFail($id)->delete();
        return response()->json(['message' => 'Product has been removed']);
    }
}
