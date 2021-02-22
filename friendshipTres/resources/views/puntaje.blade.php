@extends('layouts.app')
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
                <div class="card-body">
                           <div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Puntaje
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
						  @foreach($puntaje as $key =>  $score)
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">

                      {{$score->nickName}}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
										 {{$score->puntaje}}
              </td>
            </tr>
						@endforeach
            <!-- More items... -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

